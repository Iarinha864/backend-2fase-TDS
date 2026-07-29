const feed = require (´./feed.json`);

//Adiciona um comentário ao array do post
function adicionarComentario(feed, idPost, usuario, texto) {
  const post = feed [0].id === idPost ? feed [0] : feed [1].id === idPost ? [1] : feed [2] ; 

  if(post.comentarios.lenght === 0){
    console.log (´Post ${idPost} não tem comentários.`);
    return;
} 

  console.log (´Comentários do post ${idPost} (@{post.autor});`);
  console.log(´[0] @${post.comentarios[0].usuario} : ${post.comentarios[0].texto}`)

if (post.comentarios.lenght > 1)
  console.log(´[1]@${post.comentarios [1].usuario}: ${post.comentarios[1].usuario}`);
  }           

adicionarComentario(feed, 1, "Bianca", "Concordo demais!");
listarComentario(feed,1);
  
