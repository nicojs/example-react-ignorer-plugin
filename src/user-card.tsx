import { useEffect, useState } from "react";

interface UserCardProps {
  id: string;
}
export function UserCard({ id }: UserCardProps) {
  const [name, setName] = useState("");
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => response.json())
      .then((user) => setName(user.name));
  }, [id]);

  if(!name){
    return;
  }

  return <h1>{name}</h1>;
}
