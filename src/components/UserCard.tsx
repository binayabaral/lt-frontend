interface UserCardProps {
  name: string;
  email: string;
  phoneNumber?: string;
  address?: string;
  profilePicUrl: string;
}

const UserCard = (props: UserCardProps) => {
  const { name, email, profilePicUrl, phoneNumber, address } = props;
  return (
    <div className='column'>
      <div className='display-img'>
        <img src={profilePicUrl} alt={name} />
      </div>
      <div className='form-group'>Name: {name}</div>
      <div className='form-group'>Email: {email}</div>
      {phoneNumber && <div className='form-group'>Phone Number: {phoneNumber}</div>}
      {address && <div className='form-group'>Address: {address}</div>}
    </div>
  );
};

export default UserCard;
