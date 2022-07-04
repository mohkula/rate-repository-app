import React from "react";
import { View, FlatList, StyleSheet, Pressable } from "react-native";
import { format, parseISO } from "date-fns";
import theme from "../theme";
import Text from "./Text";
import { ME } from "../graphql/queries";
import { useNavigate } from "react-router-native";
import { useQuery } from "@apollo/client";

const styles = StyleSheet.create({
    reviewContainer: {
      backgroundColor: theme.colors.white,
    },
    
    ratingCircle: {
      marginLeft: 5,
      width: 45,
      height: 45,
      borderRadius: 100 / 2,
      borderColor: theme.colors.primary,
      borderWidth: 2.5,
      justifyContent: "center",
      alignItems: "center",
    },
    reviewText: {
      marginVertical: 6,
    },
  });





const ReviewItem = ({ review }) => {
  const { createdAt, rating, text, user, repository } = review;
  const formatedDate = format(parseISO(createdAt), "MM.dd.yyyy");
  const navigate = useNavigate()
 

  return (
    <View >
      <View >
        <View style={styles.ratingCircle}>
          <Text color="primary" fontWeight="bold">
            {rating}
          </Text>
        </View>
        <View style={styles.rightColumn}>
          <Text fontWeight="bold">
            {repository.id ? repository.id : user.username}
          </Text>
          <Text color="textSecondary">{formatedDate}</Text>
          <View style={styles.reviewText}>
            <Text color='primary'> {text}</Text>
          </View>
        </View>
      </View>

      <View style={styles.buttonsContainer}>
        <Pressable
          style={styles.leftButton}
          onPress={() => {
            navigate('/repository/' + repository.id)
          }}
        >
          <Text color="white" fontWeight="bold" fontSize="subheading">
            View repository
          </Text>
        </Pressable>
        
      </View>
    </View>
  );
};

const MyReviews = () => {
  const { data } = useQuery(ME, {
    variables: { includeReviews: true },
    fetchPolicy: "cache-and-network",
    refetchQueries: [{ query: ME }],
  });

  const repositoryNodes = data
    ? data.me.reviews.edges.map((edge) => edge.node)
    : [];

  

  return (
      <FlatList
        data={repositoryNodes}
        renderItem={({ item }) => <ReviewItem review={item} />}
        keyExtractor={({ id }) => id}
      />
  );
};



export default MyReviews;