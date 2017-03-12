import { Component } from '@angular/core';
import { PostsService } from '../services/posts.service';

@Component({
    moduleId: module.id,
    selector: 'user',
    templateUrl: 'user.component.html',
    providers: [PostsService]
})
export class UserComponent  {
  users: User[];
  newUser: User;
  posts: Post[];

  constructor(private postsService: PostsService) {
    this.users = [
        {
            name: 'Peter',
            gender: 'male',
            age: 28
        },
        {
            name: 'Betti',
            gender: 'female',
            age: 26
        }
    ];

    this.newUser = new User();
    this.posts = new Array<Post>();

    this.getPosts();
  }

  addUser(newUser: User) {
    this.users.push(new User(newUser));
  }

  deleteUser(index: number) {
      this.users.splice(index, 1);
  }

  getPosts() {
      this.postsService.getPosts().subscribe(posts => {
          this.posts = posts;
      });
  }
}

export class User {
    name: string;
    gender: string;
    age: number;

    constructor(data?: User) {
        data = data || <User>{};

        this.name = data.name || '';
        this.gender = data.gender || '';
        this.age = data.age || 0;
    }
}

export class Post {
    userId: number;
    id: number;
    title: string;
    body: string;

    constructor(data?: Post) {
        data = data || <Post>{};

        this.userId = data.userId || 0;
        this.id = data.id || 0;
        this.title = data.title || '';
        this.body = data.body || '';
    }
}