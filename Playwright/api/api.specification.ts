//LIST USERS

const { test } = require('@playwright/test');

test('List Users Test', async ({}) => {
  const response = await fetch('https://reqres.in/api/users?page=2');
  const users = await response.json();

  // Assert status code
  expect(response.status()).toBe(200);

  // Assert response content
  expect(users.data.length).toBeGreaterThan(0);
});


//CREATE USER
const { test } = require('@playwright/test');

test('Create User Test', async ({}) => {
  const response = await fetch('https://reqres.in/api/users', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: 'John', job: 'Tester' })
  });
  const user = await response.json();

  // Assert status code
  expect(response.status()).toBe(201);

  // Assert response content
  expect(user.name).toBe('John');
  expect(user.job).toBe('Tester');
});


//UPDATE USER
const { test } = require('@playwright/test');

test('Update User Test', async ({}) => {
  const userId = 1;
  const response = await fetch(`https://reqres.in/api/users/2/${userId}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: 'Updated Name', job: 'Developer' })
  });
  const updatedUser = await response.json();

  // Assert status code
  expect(response.status()).toBe(200);

  // Assert response content
  expect(updatedUser.name).toBe('Updated Name');
  expect(updatedUser.job).toBe('Developer');
});
