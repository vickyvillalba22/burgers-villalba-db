export default function UserInfo({ user }) {
  return (
    <section>
      <div className="w-24 h-24 rounded-full bg-gray-300" />

      <h2>{user.name}</h2>

      <p>{user.email}</p>
    </section>
  );
}