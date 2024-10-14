import React from 'react';
import { Stock } from '../types';
import { ArrowUpCircle, ArrowDownCircle, X } from 'lucide-react';

interface StockDetailProps {
  stock: Stock;
  onClose: () => void;
}

const StockDetail: React.FC<StockDetailProps> = ({ stock, onClose }) => {
  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center">
      <div className="relative bg-white rounded-lg shadow-xl p-8 m-4 max-w-xl w-full">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <X size={24} />
        </button>
        <h2 className="text-2xl font-bold mb-4">{stock.name} ({stock.symbol})</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-500">現在価格</p>
            <p className="text-xl font-semibold">¥{stock.price.toLocaleString()}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">変動</p>
            <p className={`text-xl font-semibold flex items-center ${
              stock.change >= 0 ? 'text-green-600' : 'text-red-600'
            }`}>
              {stock.change >= 0 ? (
                <ArrowUpCircle className="mr-1" size={20} />
              ) : (
                <ArrowDownCircle className="mr-1" size={20} />
              )}
              {stock.change.toFixed(2)}%
            </p>
          </div>
        </div>
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">株価チャート</h3>
          <div className="bg-gray-100 h-48 rounded flex items-center justify-center">
            <p className="text-gray-500">チャートはこちらに表示されます</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StockDetail;