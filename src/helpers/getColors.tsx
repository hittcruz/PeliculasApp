import ImageColors from 'react-native-image-colors';

export const getImageColors = async (uri: string) => {
  // const movie = nowPlaying[index];
  // const uri = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;

  const colors = await ImageColors.getColors(uri, {});

  let primary;
  let secondary;

  switch (colors.platform) {
    case 'android':
      // android result properties
      primary = colors.dominant;
      secondary = colors.average;
      break;
    case 'ios':
      // iOS result properties
      primary = colors.primary;
      secondary = colors.secondary;
      break;
    default:
      throw new Error('No se encuentra la platform key');
  }

  return [primary, secondary];
};
