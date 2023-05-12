import { Container, Image } from "./styles";

type IllustrationProps = {
  path: string;
};

const Illustration = ({ path }: IllustrationProps) => {
  return (
    <Container>
      <Image src={path} alt="decorative illustration" />
    </Container>
  );
};

export default Illustration;
