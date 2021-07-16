const { Movie } = require ('../movie/movie.model');

exports.add = async (entryObject) => {
    try {
        const movie = new Movie (entryObject);
        const savedMovie = await movie.save();
        console.log(savedMovie);
    } catch (error) {
        console.log(error);
        
    }
};
exports.list = async () => {
    try {
          const movies = await Movie.find();
        console.log (movies);
        
     } catch (error) {
        console.log(error);
    }
};

exports.update = async  (filter, update) => {
    try {
       const updateMovie = await Movie.findOneAndUpdate(filter, update);
       console.log(updateMovie);
    } catch (error) {
        console.log(error);
    };

}

exports.remove = async (search) => {
   try {
       const removeMovie = await Movie.findOneAndDelete(search);
       console.log(removeMovie);
    } catch (error) {
        console.log(error);
    }
    
};