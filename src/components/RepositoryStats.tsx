import { Repository } from "../interfaces/repository";
import { View } from "react-native";
import StyledText from "./StyledText";
interface RepositoryStatsProps {
    item: Repository;
  }

  
const parseThousands = (value: number) => {
    return value >= 1000 ? `${Math.round(value / 100) / 10}k` : String(value);
  };

    const RepositoryStats: React.FC<RepositoryStatsProps> = ({ item }) => {
    return (
      <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
        <View>
          <StyledText align="center" fontWeight="bold">
            {parseThousands(item.stargazersCount)}
          </StyledText>
          <StyledText align="center" >
            Stars
          </StyledText>
        </View>
  
        <View>
          <StyledText align="center" fontWeight="bold">
            {parseThousands(item.forksCount)}
          </StyledText>
          <StyledText align="center" >
            Forks
          </StyledText>
        </View>
        <View>
          <StyledText align="center" fontWeight="bold">
            {parseThousands(item.reviewCount)}
          </StyledText>
          <StyledText align="center" >
            Reviews
          </StyledText>
        </View>
  
        <View>
          <StyledText align="center" fontWeight="bold">
            {parseThousands(item.ratingAverage)}
          </StyledText>
          <StyledText align="center" >
            Rating
          </StyledText>
        </View>
      </View>
    );
  };

  export default RepositoryStats