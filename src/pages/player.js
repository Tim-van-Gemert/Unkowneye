import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Player () {
  const router = useRouter();
  const { name } = router.query;

  return (
    <div>
      <h1>{name}</h1>
      <Link href={'/'}>GO BACK</Link>
    </div>
  );
};


