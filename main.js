const neymarImages = [
    'https://imgs.search.brave.com/sgvfSDrnveN_4Ynp0MDsjBF4qo8a0PhPCed7NOyqfZY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wNC53/YWxscGFwZXJiZXR0/ZXIuY29tL3dhbGxw/YXBlci8yMDUvOTkw/LzM5OC9zb2NjZXIt/bmV5bWFyLWJyYXpp/bGlhbi1wYXJpcy1z/YWludC1nZXJtYWlu/LWYtYy13YWxscGFw/ZXItcHJldmlldy5q/cGc',
    'https://imgs.search.brave.com/Cpni1aLSljg7Bg11d_UGcZapWoUOgl7KTbMzvlSEkRc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wNC53/YWxscGFwZXJiZXR0/ZXIuY29tL3dhbGxw/YXBlci85MDgvODY5/LzEyOS9uZXltYXIt/NGstd2FsbHBhcGVy/LXByZXZpZXcuanBn',
    'https://imgs.search.brave.com/tLXMhSTQQ4UzaVBi4G_UM0S3YSrA5ffM4kad2cTNUnY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvbmV5bWFyLTRr/LTc3Zjdtb3Bqdjdn/c3p1czUuanBn',
    'https://imgs.search.brave.com/m2H4Ggo2Y8UzJWxnoD4DgUeWT4yNMZdERNPzyXYDzZM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMjA1/MzA2NTQ1Mi9wdC9m/b3RvL2JhaHJhaW4t/YmFocmFpbi1uZXlt/YXItcG9zZXMtZm9y/LWEtcGhvdG8taW4t/dGhlLXZpc2EtY2Fz/aC1hcHAtcmItZ2Fy/YWdlLXByaW9yLXRv/LXRoZS1mMS1ncmFu/ZC5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9OU52Q21SNkdj/ZVZtS0ZOQUd1TEhP/dnVCdU9MWUFGd2hn/dkpWVHY2eFlwaz0',
    'https://imgs.search.brave.com/YKZsxH5Hoh6ipVZTZbPuM8iDelrW4Vj1X6FqiWykwGI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXIuZm9yZnVu/LmNvbS9mZXRjaC83/ZC83ZDYwM2M2ZTgx/OTAzNzc5NWY2ZmEw/MzU5MzUxNmNkZi5q/cGVn',
    'https://images2.alphacoders.com/962/thumb-1920-962023.jpg',
    'https://wallpaper.forfun.com/fetch/6a/6aabad8d1ab81369bc4154b41cc10604.jpeg',
    'https://wallpaper.forfun.com/fetch/31/31d39bf70d208dc7494dc894d9001ade.jpeg',
    'https://mir-s3-cdn-cf.behance.net/projects/404/8d373b104564221.Y3JvcCwxNDQwLDExMjYsMCw3MTY.png',
    'https://c4.wallpaperflare.com/wallpaper/506/947/821/soccer-cristiano-ronaldo-lionel-messi-neymar-wallpaper-preview.jpg',
    'https://wallpaper.forfun.com/fetch/3e/3ee17abb8ea8bf68f36084b3b7eb3255.jpeg',
];

document.body.style.backgroundColor = '#000';
document.body.style.display = 'flex';
document.body.style.flexDirection = 'column';
document.body.style.alignItems = 'center';
document.body.style.justifyContent = 'center';
document.body.style.height = '100vh';


const messageDiv = document.createElement('div');
messageDiv.textContent = 'Olá, agora veja fotos do Mininu Ney';
messageDiv.style.fontSize = '24px';
messageDiv.style.color = 'yellow';
messageDiv.style.textAlign = 'center';
messageDiv.style.marginTop = '20px';
document.body.appendChild(messageDiv);


const imageElement = document.createElement('img');
imageElement.style.display = 'block';
imageElement.style.margin = '20px';
imageElement.style.borderRadius = '10px'; 
imageElement.style.maxWidth = '700px';
document.body.appendChild(imageElement);


function updateImage() {
    const randomIndex = Math.floor(Math.random() * neymarImages.length);
    imageElement.src = neymarImages[randomIndex];
}


updateImage();
setInterval(updateImage, 1000);