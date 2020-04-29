import React,{useState,Component } from "react";
import { StyleSheet, View} from 'react-native';
import { Container,Title,Card,CardItem, Header, Content,Right, Textarea, Form,Button,Icon, Text, Body, Left } from "native-base";

// function Task({route}){
//     const {title} = route.params
//     return(
//         <View>
//             <Text style={styles.title}>{title}</Text>
//         </View>
//     )
// }
export default class UnderlinedTextboxExample extends Component {
    
    render() {
      return (       
        <Container>
          <Header>
          <Left>
            <Button transparent>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>Task View</Title>
          </Body>
          <Right>
            <Button transparent>
              <Text>Cancel</Text>
            </Button>
          </Right>
        </Header>
            <Content padder>
                <Card transparent>
                    <CardItem>
                    <Body>
                        <Text style={{fontSize:20,fontWeight: "bold",textDecorationLine: 'underline',textAlign:"center"}}>
                        {title}
                        </Text>
                    </Body>
                    </CardItem>
                </Card>
                <Form>
                    <Textarea rowSpan={15} bordered placeholder="Task Notes" />
                </Form>
            </Content>  
        </Container>
      );
    }
  }

const styles = StyleSheet.create({
   title:{
       fontSize:25,
       alignItems: 'center',
       justifyContent: 'center'
   }
    
});

