export interface CommonResponse<T> {
  success: boolean;
  errorMessage: string;
  payload: T;
}