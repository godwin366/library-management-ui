export interface IRecord<K = any> {
  [key: string]: K;
}
export interface IHeadcells {
  header: string;
  value: (row?: any) => string | React.ReactNode;
}
export interface IUser {
  username: string;
  name: string;
  email: string;
  contactNumber: string;
}
export interface IBooks {
  name: string;
  author: string;
  currentAvailabilityStatus: string;
}

export interface ITransaction {
  userDetails: {
    userId: number;
    name: string;
    email: string;
    contactNumber: string;
  };
  bookDetails: {
    bookId: number;
    name: string;
    author: string;
  };
  dueDate: string;
  transactionType: string;
}
