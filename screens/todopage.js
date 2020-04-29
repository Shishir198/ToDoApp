// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// function Todo(){
//     return (
        
        
//     )
// }



// export default Todo
import React, { Component } from "react";
import { StyleSheet, View, ScrollView,FlatList } from 'react-native';

import { Container,Title, Header, Content,Right, Card, CardItem,Button,Icon, Text, Body } from "native-base";
export default class CardItemBordered extends Component {
  render() {
    const data=[{id:'1',stime:"10:00AM",etime:"1:00PM",title:"Play Assasins Creed:Origins",priority:"HIGH",status:false,so:"a"},
                {id:'2',stime:"1:00PM",etime:"2:00PM",title:"Watch Money Heist Ep5",priority:"LOW",status:false,so:"c"},
                {id:'3',stime:"5:00PM",etime:"7:00PM",title:"Practice CAD",priority:"MED",status:false,so:"b"},
                {id:'4',stime:"5:00PM",etime:"7:00PM",title:"Practice CAD",priority:"HIGH",status:true,so:"z"}
                ]
    const renderList =(item)=>{
      return (  
      
        <View >                
          <Content padder>         
            <Card >
              <CardItem header bordered >
                  <Text style={{color:"purple"}}>{item.stime} - {item.etime} </Text>
              </CardItem>
                <CardItem bordered button onPress={() => this.props.navigation.navigate('tasks',item)}>
                  <Body >
                    <View >
                        <Text style={styles.cardContent}>
                        {item.title}
                        </Text>                   
                    </View>
                  </Body>
                </CardItem>
                <CardItem footer bordered style={styles.cardfooter}>
                  
                  <Text style={{color:"black"}}>Priority - </Text>
                  <Button small danger bordered >
                    <Text>{item.priority}</Text>
                  </Button> 
                  <Text>                  </Text>
                  
                  {item.status?<Button small full success >
                    <Text style={{marginRight:2}}>Completed</Text>
                  </Button>:<Button small full warning >
                    <Text>Pending</Text>
                  </Button>}                 
                </CardItem>
                
            </Card>
          </Content>
        </View>
      
      )

    }
    return(
      <Container >
        <Header>
          <Body>
            <Title>   TODAY</Title>
          </Body>
          <Right>
            <Button hasText transparent style={{marginTop:5}}>
              <Text>ADD Task+</Text>
            </Button>
          </Right>
        </Header>  
       
        <FlatList
        data={data.sort((a, b) => a.so.localeCompare(b.so))}
        renderItem={({ item }) => {
          return renderList(item)
        }}
        keyExtractor={item => item.id}
      />
        
      </Container>
    )
    
  }
}

const styles = StyleSheet.create({
    // cardView: {
    //   flex:1,     
      
    // },
    cardfooter:{
      backgroundColor:"#ffffff"
    },
    cardContent:{
      fontSize:23,
      // textDecorationLine:'line-through',
      padding:15,
      paddingLeft:0    
    },
    subContent:{
      fontSize:15
    },
    disabled:{
      backgroundColor:"#bababa"
    },
    status:{
      fontSize:15
    },
    
});