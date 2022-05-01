import React, {useEffect, useState} from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import {ThemeProvider} from '@mui/material/styles';
import Button from '@mui/material/Button';
import {useDispatch, useSelector} from 'react-redux';
import {
  Alert,
  FormControl, Grid, InputLabel, MenuItem, Select, SelectChangeEvent,
} from '@mui/material';
import {createGame, initialiazeGame} from '../game/gameReducers';
import {RootState} from '../store/store';
import {GameTable} from '../game/gameTable';
import {
  useAppStyles, Item, lightTheme,
} from './appStyles';
import Header from '../common/header';
import Footer from '../common/footer';

function App() {
  const dispatch = useDispatch();
  const classes = useAppStyles();
  const [level, setLevel] = useState(1);
  const gameState = useSelector((state: RootState) => state.game);

  useEffect(() => {
    dispatch(initialiazeGame());
  }, []);

  const onPlayGame = () => {
    dispatch(createGame(`new ${level}`));
  };

  const handleOnLevelChange = (event: SelectChangeEvent) => {
    const newLevel = Number(event?.target?.value);
    setLevel(newLevel);
  };

  const renderMessage = (message: string) => {
    return message !== 'OK' ? message : '';
  };

  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={lightTheme}>
        <div className={classes.layout}>
          <Item elevation={2} className={classes.container}>
            <Header></Header>
            <Grid container spacing={12} direction="row">
              {gameState.message && gameState.message === 'You lose' &&
                  <Grid item xs={12}>
                    <Alert severity='error'>
                      {renderMessage(gameState.message)}
                    </Alert>
                  </Grid>
              }
              <Grid item xs={12}>
                {gameState.map &&
                <div className={gameState.map.length <= 10 ? `${classes.content} ${classes.smallContent}` : classes.content}>
                  <GameTable gameMap={gameState.map} />
                </div>
                }
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <div className={classes.footer}>
                <FormControl fullWidth className={classes.levelSelector}>
                  <InputLabel id="level-select-label">Level</InputLabel>
                  <Select
                    labelId="level-select-label"
                    id="level-select"
                    value={`${level}`}
                    label="Level"
                    onChange={handleOnLevelChange}
                  >
                    <MenuItem value={1}>Easy</MenuItem>
                    <MenuItem value={2}>Medium</MenuItem>
                    {/* <MenuItem value={3}>Hard</MenuItem> */}
                  </Select>
                </FormControl>
                <Button
                  onClick={onPlayGame}
                  variant="contained"
                  color="warning"
                  className={classes.startButton}
                  data-testid="start-game-btn"
                >
                  {gameState.map.length ? 'Play again' : 'Start'}
                </Button>
              </div>
            </Grid>
            <br/>
            <br/>
          </Item>
          <Footer></Footer>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
