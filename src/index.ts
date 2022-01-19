interface Same {
  name: string;
  id: number;
}

export interface Person<S extends Same> {
  iden: string;
  same: S;
}

interface Same2 extends Same {
  kali: string;
}

const obj: Person<Same2> = {
  iden: 'hanafi',
  same: {
    name: 'hanafi',
    id: 9,
    kali: 'dvdavadv'
  }
};

console.log(obj);
