import Info from './Info';
import Section from './Section';
import Footer from './Footer';


function Card(props) {
  const {name, titan, img ,about , interests } = props.character;
  
    return (
      <div style={{width: '317px', margin: '1rem auto 0 auto', backgroundColor: '#1A1B21'}}>
        <Info name={name} titan={titan} img={img}/>
        <Section title="About" text={about}/>
        <Section title="Interests" text={interests}/>
        <Footer />
      </div>
    )
}

export default Card;