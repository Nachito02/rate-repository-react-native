import { View, Image,StyleSheet } from "react-native";
import { Repository } from "../interfaces/repository";
import theme from "../theme";
import StyledText from "./StyledText";
interface RepositoryItemHeaderProps {
    item: Repository;
  }
  
  const RepositoryItemHeader: React.FC<RepositoryItemHeaderProps> = ({
    item,
  }) => {
    return (
      <View style={{ flexDirection: "row", paddingBottom: 2 }}>
        <View style={{ paddingRight: 10 }}>
          <Image style={styles.image} source={{ uri: item.ownerAvatarUrl }} />
        </View>
  
        <View style={{ flex: 1, justifyContent: "center" }}>
          <StyledText fontWeight="bold" fontSize="subheading">
            {item.fullName}
          </StyledText>
          <StyledText fontWeight="bold" color="secondary">
            {item.description}
          </StyledText>
          <StyledText style={styles.language}>{item.language}</StyledText>
        </View>
      </View>
    );
  };


  const styles = StyleSheet.create({
    container: {
      padding: 20,
      paddingBottom: 5,
      paddingTop: 5,
    },
  
    language: {
      padding: 4,
      color: theme.colors.white,
      backgroundColor: theme.colors.primary,
      alignSelf: "flex-start",
      marginVertical: 4,
      borderRadius: 4,
      overflow: "hidden",
    },
  
    image: {
      width: 48,
      height: 48,
      borderRadius: 4,
    },
  });
  export default RepositoryItemHeader