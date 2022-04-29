import { atom, RecoilState } from "recoil";

interface IPost {
  id: number;
  category: string;
  title: string;
  content: string;
  hostEmail: string;
  images: string[];
  fromDate: Date;
  toDate: Date;
  postNumber: string;
  address: string;
  detailedAddress: string;
  latitude: string;
  longitude: string;
  limit: number; // 최대 참가 가능 인원 수
}
interface IUser {
  email: string;
  password: string;
  name: string;
}

interface IUserWrap {
  [key: string]: IUser;
}
interface IReservation {
  userEmail: string;
  reservedPostId: number;
  number: number;
}
export interface IState {
  users: RecoilState<IUserWrap>;
  currentUser: RecoilState<IUser> | RecoilState<null>;
  posts: RecoilState<IPost[]>;
  reservation: RecoilState<IReservation[]>;
}

const storage: IState = {
  users: atom({
    key: "user",
    default: {
      "jsw9808@gmail.com": {
        email: "jsw9808@gmail.com",
        password: "1234",
        name: "정승우",
      },
    } as IUserWrap,
  }),

  currentUser: atom({
    key: "currentUser",
    default: null,
  }),

  posts: atom({
    key: "posts",
    default: [] as IPost[],
  }),

  reservation: atom({
    key: "reservation",
    default: [] as IReservation[],
  }),
};

export default storage;