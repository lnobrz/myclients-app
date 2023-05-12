import { Container, StyledLink } from "./styles";
type LinkItemProps = {
  url: string;
  title: string;
};

const ListItem = ({ url, title }: LinkItemProps) => {
  return (
    <Container>
      <StyledLink href={url}>{title}</StyledLink>
    </Container>
  );
};

export default ListItem;
