import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
createDb() {
  const heroes = [
  {id: 11, name: 'Mr. Bad'},
  {id: 12, name: 'Mr. Zeffer'},
  {id: 14, name: 'Mr. Slow'},
  {id: 13, name: 'Mrs. Fast'},
  {id: 15, name: 'Mrs. Turrible'},
  {id: 17, name: 'Mrs. Pretty'},
  {id: 19, name: 'Mrs. Bad'},
  {id: 32, name: 'Mr. Nice'},
  {id: 45, name: 'Mr. Good'}
  ];
  return heroes;
}


}
