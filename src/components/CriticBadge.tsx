import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}
const CriticBadge = ({ score }: Props) => {
  let color = score > 75 ? "green" : score > 65 ? "yellow" : "";
  return (
    <Badge fontSize="14px" colorScheme={color} paddingX={2} borderRadius={2}>
      {score}
    </Badge>
  );
};

export default CriticBadge;
