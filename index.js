// 1

const createDelay = ms => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(ms);
    }, ms);
  });
};

const logDelay = time => console.log(`Resolved after ${time}ms`);
createDelay(2000).then(logDelay);
createDelay(1000).then(logDelay);
createDelay(1500).then(logDelay);


// 2 

const userList = [
  { name: 'Mango', active: true },
  { name: 'Poly', active: false },
  { name: 'Ajax', active: true },
  { name: 'Lux', active: false },
];
const updateUserState = (usersArray, targetName) => {
  return new Promise(resolve => {
    const result = usersArray.map(user =>
      user.name === targetName ? { ...user, active: !user.active } : user
    );
    resolve(result);
  });
};
const printUsersTable = data => console.table(data);
updateUserState(userList, 'Mango').then(printUsersTable);
updateUserState(userList, 'Lux').then(printUsersTable);


// 3 

const getRandomDelay = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
const processTransaction = transactionObj => {
  const delay = getRandomDelay(200, 500);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const isSuccess = Math.random() > 0.3;

      if (isSuccess) {
        resolve({ id: transactionObj.id, time: delay });
      } else {
        reject(transactionObj.id);
      }
    }, delay);
  });
};
const handleSuccess = ({ id, time }) => {
  console.log(`Transaction ${id} processed in ${time}ms`);
};
const handleError = id => {
  console.warn(`Error processing transaction ${id}. Please try again later.`);
};
processTransaction({ id: 70, amount: 150 }).then(handleSuccess).catch(handleError);
processTransaction({ id: 71, amount: 230 }).then(handleSuccess).catch(handleError);
processTransaction({ id: 72, amount: 75 }).then(handleSuccess).catch(handleError);
processTransaction({ id: 73, amount: 100 }).then(handleSuccess).catch(handleError);
