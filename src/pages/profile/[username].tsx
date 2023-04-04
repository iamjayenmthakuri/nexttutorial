import { useRouter } from "next/router";
function profile() {
  const router = useRouter();
  const { username } = router.query;
  return <div>{username}</div>;
}

export default profile;
