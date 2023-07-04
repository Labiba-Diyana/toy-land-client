import useTitle from "../../hooks/useTitle";


const Blogs = () => {
    useTitle('Blogs');
    return (
        <div className="bg-[#99623156] p-20">
            <h2 className="text-4xl text-center font-bold text-amber-800 underline underline-offset-8 decoration-4  mb-16">Blogs</h2>
            <div className="grid grid-cols-2 gap-14">
                <div className="flex">
                    <hr className="border-4 border-amber-700 rounded-full h-full mr-7" />
                    <div>
                        <h3 className="text-2xl font-semibold text-amber-700">1. What is an access token and refresh token? How do they work and where should we store them on the client-side?</h3>
                        <p className="whitespace-pre-line pt-5">Access tokens are used in token-based authentication to allow an application to access an API. It is
                            re-issued, provided the refresh token is a valid one requesting permission to access confidential resources.A refresh token is a special token that is used to obtain additional access tokens. <br />
                            A refresh token just helps you re-validate a user without them having to re-enter their login credentials multiple times. The access token is re-issued, provided the refresh token is a valid one requesting permission to access confidential resources. <br />
                            We can store the access token and refresh token in a browser cookie or local storage.
                        </p>
                    </div>
                </div>
                <div className="flex">
                    <hr className="border-4 border-amber-700 rounded-full h-[172px] mr-7" />
                    <div>
                        <h3 className="text-2xl font-semibold text-amber-700">2. Comparison of SQL and NoSQL databases.</h3>
                        <p className="whitespace-pre-line pt-5">SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON. NoSQL is preferred over SQL in many cases because it offers more flexibility and scalability. NoSQL is a class of DBMs that are non-relational and generally do not use SQL. SQL is valued for ensuring data validity where NoSQL is easy-to-use, flexible and offers high performance.</p>
                    </div>
                </div>
                <div className="flex">
                    <hr className="border-4 border-amber-700 rounded-full h-[194px] mr-7" />
                    <div>
                        <h3 className="text-2xl font-semibold text-amber-700">3. What is express js? What is Nest JS?</h3>
                        <p className="whitespace-pre-line pt-5">Express is a minimalist and flexible framework that is easy to use and has a large community of developers. It is used to build a single page, multi-page, and hybrid web application. It is a layer built on the top of the Node js that helps manage servers and routes.<br />
                            NestJS is a newer framework that provides additional features such as dependency injection, a modular architecture, and an intuitive CLI.Nest. js is a server-side Node. js framework that is great for building highly testable and maintainable backend applications.
                        </p>
                    </div>
                </div>
                <div className="flex">
                    <hr className="border-4 border-amber-700 rounded-full h-[172px] mr-7" />
                    <div>
                        <h3 className="text-2xl font-semibold text-amber-700">4. What is MongoDB aggregate and how does it work?</h3>
                        <p className="whitespace-pre-line pt-5">Aggregations is the process of combining things. Its emphasize low number of results for large numbers of entries. Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages.
                            <br />
                            Aggregation operations process multiple documents and return computed results. It returns a cursor to the documents produced by the final stage of the aggregation pipeline operation.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;