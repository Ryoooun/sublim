export default function useIndexedDB(params) {
  const checkIndexedDB = () => {
    if (!("indexedDB" in window)) {
      console.log("This browser dose'nt support IndexedDB");
    } else {
      console.log("This browser support IndexedDB");
    }
  };

  let db;
  const testIndexedDB = () => {
    const request = indexedDB.open("firebaseLocalStorageDb", 1);
    request.onerror = (event) => {
      console.error("IndexedDB読み込み時エラーが発生しました。");
    };
    request.onsuccess = (event) => {
      db = event.target.result;
      console.log(db);
    };
  };

  return { checkIndexedDB, testIndexedDB };
}
