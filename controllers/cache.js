import redis from 'redis';
class MockDatabase {
    wait = (milliseconds) => {
        return new Promise(resolve => 
            setTimeout(resolve, milliseconds)
        );
    }
    get = () => {
        return new Promise(async (resolve) => {
            await this.wait(3000);
            resolve({
                data: 'some-random-data'
            })
        });
    }
}
class CacheDemo {
    withoutCache = async (req, res) => {
        const db = new MockDatabase();
        const data = await db.get();
        res.status(200).send(data)
    }
    withCache = (req, res) => {

        const client = redis.createClient();

        client.get("data", async (err, data) => {
            if(err)
                res.status(500).send({err})
            else if (data) {
                res.status(200).send(data);
            } else {
                const db = new MockDatabase();
                const data = await db.get();
                client.set('data', JSON.stringify(data));
                res.status(200).send(data);
            }
        });
    }
}
export default new CacheDemo;