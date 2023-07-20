export const getCroppedImageUrl = (imageUrl: string) => {
 const target = "media/";
 const index = imageUrl.indexOf(target) + target.length

 return "https://media.rawg.io/media/crop/600/400/" + imageUrl.substring(index)
 
}