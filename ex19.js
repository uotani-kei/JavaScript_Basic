const all_success = Promise.all([
Promise.resolve('success'),
Promise.resolve('foo'),
Promise.resolve(true)
])

all_success 