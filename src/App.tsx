import React, { useState } from 'react';
import { Stock } from './types';
import StockList from './components/StockList';
import AddStockForm from './components/AddStockForm';
import StockDetail from './components/StockDetail';
import { LineChart } from 'lucide-react';

const initialStocks: Stock[] = [
  { id: '1', symbol: '7203', name: 'トヨタ自動車', price: 2500, change: 1.5 },
  { id: '2', symbol: '9984', name: 'ソフトバンクグループ', price: 5000, change: -0.8 },
  { id: '3', symbol: '6758', name: 'ソニーグループ', price: 12000, change: 2.3 },
];

function App() {
  const [stocks, setStocks] = useState<Stock[]>(initialStocks);
  const [selectedStock, setSelectedStock] = useState<Stock | null>(null);

  const handleAddStock = (symbol: string, name: string) => {
    const newStock: Stock = {
      id: Date.now().toString(),
      symbol,
      name,
      price: Math.floor(Math.random() * 10000) + 1000,
      change: (Math.random() * 6) - 3,
    };
    setStocks([...stocks, newStock]);
  };

  const handleDeleteStock = (id: string) => {
    setStocks(stocks.filter(stock => stock.id !== id));
  };

  const handleSelectStock = (stock: Stock) => {
    setSelectedStock(stock);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-3xl sm:mx-auto w-full px-4 sm:px-0">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center space-x-2 mb-6">
              <LineChart className="h-8 w-8 text-indigo-600" />
              <h1 className="text-2xl font-semibold">株式監視銘柄管理</h1>
            </div>
            <div className="space-y-6">
              <AddStockForm onAdd={handleAddStock} />
              <StockList
                stocks={stocks}
                onDelete={handleDeleteStock}
                onSelect={handleSelectStock}
              />
            </div>
          </div>
        </div>
      </div>
      {selectedStock && (
        <StockDetail stock={selectedStock} onClose={() => setSelectedStock(null)} />
      )}
    </div>
  );
}

export default App;