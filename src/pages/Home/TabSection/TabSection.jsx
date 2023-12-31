import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import TeddyToys from './TeddyToys';
import UnicornToys from './UnicornToys';
import HorseToys from './HorseToys';

const TabSection = () => {
    const [firstTab, setFirstTab] = useState([]);
    const [secondTab, setSecondTab] = useState([]);
    const [thirdTab, setThirdTab] = useState([]);
    useEffect(() => {
        fetch('https://toy-store-server-six.vercel.app/tabs')
            .then(res => res.json())
            .then(data => {
                const teddy = data.filter(ted => ted.subCategory === 'teddy');
                setFirstTab(teddy);
                const horse = data.filter(horse => horse.subCategory === 'horse');
                setSecondTab(horse);
                const unicorn = data.filter(uni => uni.subCategory === 'unicorn');
                setThirdTab(unicorn);
            })
    }, [])

    return (
        <div className='my-16 lg:my-20 w-10/12 mx-auto'>
            <div className='text-center text-amber-800 mb-14 space-y-5 lg:space-y-7'>
                <h1 className='text-3xl lg:text-6xl font-bold'>Shop by category</h1>
                <p className='text-xs lg:text-xl text-stone-600 whitespace-pre-line'>There are some amazing toys based on categories. From here <br className='hidden lg:block' /> you can buy your required ones. Our toys are highly praised for its comfy features.</p>
            </div>
            <Tabs>
                <TabList className="space-x-7 text-amber-600 font-bold text-base lg:text-2xl  flex justify-center items-center mb-14 ">
                    <Tab>Teddy Bear</Tab>
                    <Tab>Horse</Tab>
                    <Tab>Unicorn</Tab>
                </TabList>
                <div className='w-9/12 mx-auto lg:w-full'>
                    <TabPanel>
                        <div className="grid grid-cols-1 lg:grid-cols-4 gap-16">
                            {
                                firstTab.map(teddy => <TeddyToys
                                    key={teddy.picture}
                                    teddy={teddy}
                                ></TeddyToys>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="grid grid-cols-1 lg:grid-cols-4 gap-16">
                            {
                                secondTab.map(horse => <HorseToys
                                    key={horse.picture}
                                    horse={horse}
                                ></HorseToys>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="grid grid-cols-1 lg:grid-cols-4 gap-16">
                            {
                                thirdTab.map(unicorn => <UnicornToys
                                    key={unicorn.picture}
                                    unicorn={unicorn}
                                ></UnicornToys>)
                            }
                        </div>
                    </TabPanel>
                </div>
            </Tabs>
        </div>
    );
};

export default TabSection;