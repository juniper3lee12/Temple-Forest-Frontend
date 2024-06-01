import React from 'react';
import { StyleSheet, View, Image} from 'react-native';
import { Button, Card, Layout, Text } from '@ui-kitten/components';
import { GlobalStyles } from "../styles/global";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { ThemeProvider } from '../context/theme';



const programs = [
  {
    key: "1",
    name: "Vipassana Meditation",
    info: "It focuses on the deep interconnection between mind and body,which can be experienced directly by disciplined attention to the physical sensations that form the life of the body,and that continuously interconnect and condition the life of the mind.",
    source: "https://www.dhamma.org/",
    url: "https://media.istockphoto.com/id/1170483442/photo/woman-practicing-yoga-at-wild-lake.webp?b=1&s=170667a&w=0&k=20&c=dskKK3YKx9LRWyapH933h4Xk7MWLc26nI-ZmreiLtlM="
  },
  {
    key: "2",
    name: "Movement Meditation  ",
    info: "Moving meditation is a way of bringing together movement and the focused mind. It is a type of meditation that is different from the traditional form, where you might sit quietly and remain still. In moving meditation, your body is active, but your mind is calm and centered.",
    source: "https://www.calm.com/",
    url: "https://media.istockphoto.com/id/2132163682/photo/mother-and-daughter-are-meditating-on-the-bed.jpg?s=612x612&w=0&k=20&c=Gp5fLoMU_OODqpR4khO9w84pBJ21exgz9aGKe3L0XhU=",
  },
  
];

const Header = (props) => {
  const globalStyles = GlobalStyles();
  return (
    <View style={globalStyles.container2}>
      <ThemeProvider>
      <TouchableOpacity>
      <Image
      style={styles1.stretch}
      source={{
          uri: props.url
        }}
        resizeMode={'cover'} 
    />
    </TouchableOpacity>
      <Text style={globalStyles.text} >
      {props.name}
    </Text>
    <Text style={globalStyles.text}>
      {props.source}
    </Text>
    </ThemeProvider>
  </View>
  );
};

const Footer = () => {
  const globalStyles = GlobalStyles();
  const navigation = useNavigation();

  return (
    <View style={globalStyles.footerContainer}>   
     <Button
      title= "Record Hours"
      onPress={() => navigation.navigate('Meditate')}
      style={globalStyles.footerControl}
      size='small'
      status='success'      
      >
      Record Your Meditaion Journal 
      </Button>     
    
  </View>
  );
};



export default function CardAccessories () {
  
  return (
    <View>
      
    {programs.map((program) => ( <Program {...program}  /> ))}
              
    </View>
  );
};

function Program({ name, info, source, ...rest }) {
  
  const globalStyles = GlobalStyles();  ;
  return (
    <View>
      <ThemeProvider>
    <Layout style={globalStyles.topContainer} level='1'>
      <Card style={globalStyles.card} header={() => <Header {...rest} />}>        
            <Text style={globalStyles.text}> About: {name} </Text>
      </Card>  
    </Layout>

    <Card style={globalStyles.card}>
      <Text style={globalStyles.text}> {info} </Text>
        <Card style={styles1.card} footer={Footer} >
        <Text style={globalStyles.text}> JOURNAL </Text>
      </Card>
    </Card>
    </ThemeProvider> 
  </View>
  );
}





const styles1 = StyleSheet.create({
  container: {
    paddingTop: 20,
  },
  stretch: {
    width: 420,
    height: 200,
    resizeMode: 'stretch',
  },
  card: {
    alignItems: 'center'
  }
});




















// import * as React from 'react';
// import { Avatar, Button, Card, Text } from 'react-native-paper';

// const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

// const Cards = () => (
//   <Card>
//     <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />
//     <Card.Content>
//       <Text variant="titleLarge">Card title</Text>
//       <Text variant="bodyMedium">Card content</Text>
//     </Card.Content>
//     <Card.Cover source={{ uri: 'https://media.istockphoto.com/id/1321664779/photo/silhouette-of-young-woman-practicing-yoga-outdoors.jpg?s=612x612&w=0&k=20&c=vHylnciB9SbNDl0YWcA2iF881FAjYkQ_R48R4OAE-O0=' }} />
//     <Card.Actions>
//       <Button>Cancel</Button>
//       <Button>Ok</Button>
//     </Card.Actions>
//   </Card>
// );

// export default Cards;








