import { GreetProps } from './Greet.types';

export default function Greet({ name }: GreetProps) {
  return <div>Hello {name ? name : 'Guest'}</div>;
}
