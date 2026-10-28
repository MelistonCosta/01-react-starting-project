export const userData = {
  firstName: 'Meliston',
  lastName: 'Costa',
  designation: 'React Developer',
};

export function User() {
  return (
    <>
        <div id="user" data-testid="user" className="text-center">
            <h2>Hi this is {userData.firstName} {userData.lastName}, I'm a {userData.designation}</h2>
        </div>
    </>
  );
}
