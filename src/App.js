import classes from './App.module.sass';
import CardsSelect from './components/CardsSelect';

const App = () => {
    return (
        <div className={classes.container}>
            <div className={classes.title}>Ты сегодня покормил кота?</div>
            <CardsSelect />
        </div>
    );
};

export default App;
