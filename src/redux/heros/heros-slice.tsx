import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { CharacterPaylod } from '@/types/types-response';

const saveFavoriteHeroToLocalStorage = (favoriteHero: CharacterPaylod[]) => {
  localStorage.setItem('favoriteHero', JSON.stringify(favoriteHero));
};

const loadFavoriteHeroFromLocalStorage = (): CharacterPaylod[] => {
  const favoriteHeroJson = localStorage.getItem('favoriteHero');
  if (favoriteHeroJson) {
    return JSON.parse(favoriteHeroJson);
  }
  return [];
};

interface HeroSliceProps {
  toggleActive: boolean;
  onlyFavorite: boolean;
  favoriteHero: CharacterPaylod[];
  idHero: number;
}

const initialState: HeroSliceProps = {
  toggleActive: true,
  onlyFavorite: false,
  favoriteHero: loadFavoriteHeroFromLocalStorage(),
  idHero: 0,
};

const MAX_FAVORITE_HEROES = 5;

const heroSlice = createSlice({
  name: 'hero',
  initialState,
  reducers: {
    toggleActive: (state, action) => {
      state.toggleActive = action.payload;
    },
    listOnlyFavorites: (state, action) => {
      state.onlyFavorite = action.payload;
    },
    addToFavoriteHero: (state, action: PayloadAction<CharacterPaylod>) => {
      const movie = action.payload;
      const isDuplicate = state.favoriteHero.some(
        (item) => item.id === movie.id,
      );
      const hasReachedLimit = state.favoriteHero.length >= MAX_FAVORITE_HEROES;

      if (!isDuplicate && !hasReachedLimit) {
        state.favoriteHero.push({
          id: movie.id,
          name: movie.name,
          description: '',
          thumbnail: movie.thumbnail,
          comics: movie.comics,
        });
      }
      saveFavoriteHeroToLocalStorage(state.favoriteHero);
    },
    removeFromFavoriteHero: (state, action: PayloadAction<number>) => {
      const idToRemove = action.payload;
      state.favoriteHero = state.favoriteHero.filter(
        (item) => item.id !== idToRemove,
      );
      saveFavoriteHeroToLocalStorage(state.favoriteHero);
    },
  },
});

export const {
  toggleActive,
  addToFavoriteHero,
  removeFromFavoriteHero,
  listOnlyFavorites,
} = heroSlice.actions;
export default heroSlice.reducer;
