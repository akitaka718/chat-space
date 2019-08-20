require 'rails_helper'

RSpec.describe Message, type: :model do
  describe '#create'do
    context 'can save' do#メッセージを保存できる場合のテスト
      it 'is valid with body' do
        expect(build(:message,image: nil)).to be_valid
      end
      
      it 'is valid with image' do
        expect(build(:message,body: nil)).to be_valid
      end

      it 'is vaild with body and image' do
         expect(build(:message)).to be_valid     
      end
    end
    
    context 'can not save' do#メッセージが保存できない場合のテスト
      it 'is invalid without body and image' do
        message=bulid(:message,body: nil, image: nil)
        message.vaild?
        expect(message.errors[:body]).to include('を入力してください')
      end

      it 'is invalid without group_id' do
        message=bulid(:message,group_id: nil)
        message.vaild?
        expect(message.errors[:user]).to include('を入力してください')

      end
        
      it 'is invaid without user_id' do
        message= build(:message,user_id: nil)
        message.vaild?
        expect(message.errors[:user]).to include('を入力してください')
      end
    end

  end
end