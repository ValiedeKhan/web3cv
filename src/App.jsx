import { useAccount } from 'wagmi';
import { useState } from 'react';
import { Card, CardContent } from './components/ui/card';
import { Button } from './components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from './components/ui/tabs';

export default function Web3CV() {
  const { address, isConnected } = useAccount();
  const [activeTab, setActiveTab] = useState('experience');

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-purple-950 text-white p-6 space-y-6">
      <h1 className="text-4xl font-bold text-purple-300">Waleed Tahir</h1>
      <p className="text-md text-purple-100">Dubai | +971-58553-0885 | waleed.adsells@gmail.com</p>

      <Card className="bg-purple-800 border border-purple-500 shadow-lg">
        <CardContent className="p-4">
          {isConnected ? (
            <div>
              <h2 className="text-2xl font-semibold">Connected Wallet</h2>
              <p className="text-purple-200 mt-2">{address}</p>

              <Tabs defaultValue="experience" className="mt-6">
                <TabsList className="bg-purple-900 border border-purple-600">
                  <TabsTrigger value="experience">Experience</TabsTrigger>
                  <TabsTrigger value="education">Education</TabsTrigger>
                  <TabsTrigger value="skills">Skills</TabsTrigger>
                  <TabsTrigger value="identity">Web3 ID</TabsTrigger>
                  <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
                  <TabsTrigger value="references">References</TabsTrigger>
                </TabsList>

                <TabsContent value="experience">
                  <h3 className="text-xl font-bold">📜 Work Experience</h3>
                  <ul className="text-purple-100 space-y-2">
                    <li><strong>Aldrin Labs USA</strong> – Customer Success Associate (2021–2023)<br />Managed DeFi customer support, authored protocol guides, analysed on-chain data.</li>
                    <li><strong>CCCCL Pakistan</strong> – Assistant to Investment Manager (2018–2019)<br />Conducted market research, strategy development, and stakeholder reporting.</li>
                    <li><strong>Minor Hotels Australia</strong> – Duty Manager (2016–2018)<br />Managed finance audits, guest services, trust accounts, and EOM compliance.</li>
                  </ul>
                </TabsContent>

                <TabsContent value="education">
                  <h3 className="text-xl font-bold">🎓 Education</h3>
                  <ul className="text-purple-100">
                    <li>MSc: Information Systems Management – Brunel University, London</li>
                    <li>Bachelor of Commerce: Accounting – Griffith University, Australia</li>
                    <li>Diploma of Hospitality Management – BBHT, Australia</li>
                  </ul>
                </TabsContent>

                <TabsContent value="skills">
                  <h3 className="text-xl font-bold">🧠 Skills</h3>
                  <ul className="list-disc list-inside text-purple-100">
                    <li>DeFi protocols & AMMs</li>
                    <li>Blockchain data analysis</li>
                    <li>Customer support & training</li>
                    <li>Financial auditing & reconciliation</li>
                    <li>Investment strategy support</li>
                  </ul>
                </TabsContent>

                <TabsContent value="identity">
                  <h3 className="text-xl font-bold">🪪 Web3 Identity</h3>
                  <ul className="text-purple-100">
                    <li>ENS: waleed.eth (example)</li>
                    <li>POAPs: 12+ DeFi Events</li>
                    <li>DAO Contributor: M2 Exchange</li>
                  </ul>
                </TabsContent>

                <TabsContent value="portfolio">
                  <h3 className="text-xl font-bold">📁 Portfolio</h3>
                  <ul className="text-purple-300 underline">
                    <li><a href="https://github.com/waleed">GitHub</a></li>
                    <li><a href="https://waleed.blog">Blog</a></li>
                    <li><a href="https://magiceden.io/wallet/waleed">NFT Wallet</a></li>
                  </ul>
                </TabsContent>

                <TabsContent value="references">
                  <h3 className="text-xl font-bold">🤝 References</h3>
                  <ul className="text-purple-100">
                    <li>Kim Wong – M2 Exchange | kim@m2.com</li>
                    <li>Jacob Lawless – Aldrin Labs | jacob@aldrin.com</li>
                    <li>Wang Wenjie – CCCCL | wangwj@crbc.com</li>
                    <li>Jaimee Davis – Minor Hotels | hmfestival@theoaksgroup.com.au</li>
                  </ul>
                </TabsContent>
              </Tabs>
            </div>
          ) : (
            <Button className="mt-4">Connect Wallet</Button>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
