import React, { useState } from "react";
import { StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";

import RestaurantInfoCard from "../componets/restaurant-info-card.component";

const SafeArea = styled.SafeAreaView`
  margin-top: ${Platform.OS === "android" ? `${StatusBar.currentHeight}px` : "0px"};
  flex: 1;
`;

const SearchContainer = styled.View`
  padding: 16px;
`;

const RestaurantListContainer = styled.View`
  flex: 1;
  background-color: blue;
  padding: 16px;
`;

const RestaurantScreen = () => {
  const [searchQuery, setSearchQuery] = useState(null);

  const onChangeSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar
          placeholder="Search restaurants"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </SearchContainer>
      <RestaurantListContainer>
        <RestaurantInfoCard />
      </RestaurantListContainer>
    </SafeArea>
  );
};

export default RestaurantScreen;
