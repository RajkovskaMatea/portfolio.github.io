import profile from '../../assets/profile.jpg';
import { headerText } from '../../data';
import { HeaderContainer, Portrait, Heading, HeaderText } from './Header.styles';

export default function Header() {
  return (
    <HeaderContainer>
      <Portrait src={profile} alt="My portrait" />
      <Heading>Welcome to my portolio</Heading>
      <HeaderText>{headerText}</HeaderText>
    </HeaderContainer>
  );
}
