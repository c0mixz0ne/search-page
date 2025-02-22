export type User = {
  id: number
  name: string
  username: string
  email: string
  address: Address
  phone: string
  website: string
  company: Company
}

export type Company = {
  name: string
  catchPhrase: string
  bs: string
}

export type Location = {
  lat: string
  lng: string
}

export type Address = {
  street: string
  suite: string
  city: string
  zipcode: string
  geo: Location
}

export interface State {
	users: User[];
	currentUser: User | null;
	loading: boolean;
	error: string | null;
}