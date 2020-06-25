export interface Profile {
  id: number,
  email: string,
  firstName: string,
  lastName: string,
  middleName?: string,
}

export type ProfileState = Profile;
