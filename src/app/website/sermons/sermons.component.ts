import { Component, OnInit, OnDestroy, AfterViewInit, Pipe, PipeTransform } from '@angular/core';
import { AuthService } from '../../_services/auth.service';
import { TokenStorageService } from '../../_services/token-storage.service';
import { UserService } from '../../_services/user.service';
import { DomSanitizer } from '@angular/platform-browser';
import * as Rellax from 'rellax';


@Pipe({ name: 'safeHtml'})
export class SafeHtmlPipe implements PipeTransform  {
  constructor(private sanitized: DomSanitizer) {}
  transform(value) {
    return this.sanitized.bypassSecurityTrustHtml(value);
  }
}

const FILTER_PAG_REGEX = /[^0-9]/g;

@Component({
  selector: 'app-sermons',
  templateUrl: './sermons.component.html',
  styleUrls: ['./sermons.component.scss']
})

export class SermonsComponent implements OnInit, OnDestroy, AfterViewInit {

  model = {
    left: true,
    middle: false,
    right: false
};

name: string = '';
page: number | undefined;
errorMessage: string = '';

createData:any = [];
authData:any = [];
createA:any = [];
url;
isLoggedIn = false;
isLoginFailed = false;
roles: string[] = [];
i=1;
query = null;
p: number = 1;

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService, private userAccess: UserService, private _sanitizer: DomSanitizer) { }

  ngOnInit() {

    console.log(this.createData);

    var body = document.getElementsByTagName('body')[0];
    body.classList.add('presentation-page');
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.add('navbar-transparent');

    if (this.tokenStorage.getUser()) {
      this.isLoggedIn = true;
    } else {
      this.onLoad();
    }
    this.sermons();
  }

  onLoad(): void {
    this.authService.login()
        .subscribe({
            next: (data) => {
              this.tokenStorage.saveToken(data.access_token);
              this.isLoginFailed = false;
              this.isLoggedIn = true;
            },
            error: (err) => {
              this.errorMessage = err.error.message;
              this.isLoginFailed = true;
              alert(err.error.message);
            }
        });
    };

    loadPage(i:number): void {
      if(i != null){
          this.url = this.createData.paging.first;
          this.url = this.url.slice(0,- 1);
          this.userAccess.getPage1(i,this.url).subscribe(
          data => {
            this.createData = data;
          },
          err => {
            this.createData = JSON.parse(err.error).message;
          }
        );
        window.scroll(0,0);
      }

    };

    speakers(speaker:string): void {
      if(speaker != null){
          this.userAccess.getSpeaker(speaker)
          .subscribe({
            next: (data) => {
                 this.createData = data;
              this.page = Math.ceil(this.createData.total/9);
          },
            error: (err) => {
              this.createData = JSON.parse(err.error).message;
            }
        });

          window.scroll(0,0);
        }
    };

    title(): void {
      this.query = (<HTMLInputElement>document.getElementById('query')).value;
      if(this.query != ''){
          this.userAccess.getTitle(this.query)
          .subscribe({
            next: (data) => {
              this.createData = data;
            },
            error: (err) => {
              this.createData = JSON.parse(err.error).message;
            }
      });
      }
  };

  sermons(): void {
    this.userAccess.getPublicContent()
      .subscribe({
        next: (data) => {
        this.createData = data;
        this.page = Math.ceil(this.createData.total/9);
      },
      error: (err) => {
        this.createData = JSON.parse(err.error).message;
      }
  });
  };

  embed(param: any) {
    return `${param}`;
  };

  getPageSymbol(current: number) {
    return ['A', 'B', 'C', 'D', 'E', 'F', 'G'][current - 1];
  }

  selectPage(page: string) {
    this.page = parseInt(page, 10) || 1;
  }

  formatInput(input: HTMLInputElement) {
    input.value = input.value.replace(FILTER_PAG_REGEX, '');
  }

  ngAfterViewInit(){
    setTimeout(function(){
      if (window.innerWidth >= 991) {
          var rellaxHeader = new Rellax('.rellax-header');
          var rellaxText = new Rellax('.rellax-text');
      }
    },200);

  }
  ngOnDestroy() {
    var body = document.getElementsByTagName('body')[0];
    body.classList.remove('presentation-page');
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.remove('navbar-transparent');
  }

}
