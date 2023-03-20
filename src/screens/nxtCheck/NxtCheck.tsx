import React from "react";
import { FlatList, ScrollView, View } from "react-native";
import { Button, Icon, ListItem, Text } from "../../components";

interface DataType {
  id: string;
  title: string;
}

const data: DataType[] = [
  {
    id: '1',
    title: 'User ID: 8',
  },
  {
    id: '2',
    title: 'M. MUSTERMAN',
  },
];

const NxtCheck = () => {
  return (
    <ScrollView>
      <View>
        <Icon source=""/>
        <Icon source=""/>
        <Icon source=""/>
      </View>
      <View>
        <Button
          textColor={"#000"}
          borderColor={"#000"}
          title={"Login"}
          accessibility={"This is a login button"}
        />
      </View>
      <View>
        <FlatList
          data={data}
          renderItem={(item: any) => {
            const title = item?.title.split(" ");
            
            return (
              <>
                {title.length === 3
                  ? <ListItem>
                      <Text>
                        {title[0]} {title[1]} <span>{title[2]}</span>
                      </Text>
                    </ListItem>
                  : <ListItem>
                      <Text>{item?.title}</Text>
                    </ListItem>
                }
              </>
              )
            }
          }
          keyExtractor={item => item.id}
        />
      </View>
    </ScrollView>
  )
};

export default NxtCheck;