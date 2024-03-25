import React from 'react';
import { Input, Button } from './QueryForm.styled';

type Props = {
  updateQueryString: (e: React.BaseSyntheticEvent) => void;
};

export const QueryForm = ({ updateQueryString }: Props) => (
  <form onSubmit={updateQueryString}>
    <Input
      type='text'
      autoComplete='off'
      autoFocus
      placeholder='  Search movies'
    />
    <Button type='submit'>Search</Button>
  </form>
);
