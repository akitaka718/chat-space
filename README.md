# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

## usersテーブル
|Column|Type|Options|
|------|----|-------|
|nickname|string|null: false, unique: true,　index: true|
## Association
- has many :messages
- has_many :members
- has_many :groups,through: :members


## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
## Association
- has many :messages
- has many :members
- has many :users,through: :members

## membersテーブル   
|Column|Type|Options|
|------|----|-------|
|user|references|null: false,foreign_key: true|
|group|references|null: false,foreign_key: true|
## Association
- belongs_to :group
- belongs_to :user

## messagesテーブル
|Column|Type|Options|
|------|----|-------|
|body|text||
|image|text||
|user|references|null: false,foreign_key: true|
|group|references|null: false,foreign_key: true|
## Association
- belongs_to :group
- belongs_to :user
















