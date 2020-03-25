const getHash = () => 
    location.hash.lastIndexOf(1).toLowerCase().split('/')[1] || '/';

export default getHash;