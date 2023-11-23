from __future__ import annotations
from sqlalchemy import (Integer, MetaData, String, Float,)
from sqlalchemy.dialects.postgresql import JSONB
from sqlalchemy.orm import DeclarativeBase, Mapped, mapped_column, relationship


class Base(DeclarativeBase):
    """Base class"""

    metadata = MetaData(
        naming_convention={
            'ix': 'ix_%(column_0_label)s',
            'uq': 'uq_%(table_name)s_%(column_0_name)s',
            'ck': 'ck_%(table_name)s_`%(constraint_name)s`',
            'fk': 'fk_%(table_name)s_%(column_0_name)s_%(referred_table_name)s',
            'pk': 'pk_%(table_name)s',
        }
    )

class StantionCoord(Base):
    __tablename__ = 'station_coords'

    ST_ID: Mapped[int] = mapped_column(
        'ST_ID',
        Integer,
        primary_key=True,
        autoincrement=True
    )

    LATITUDE: Mapped[float] = mapped_column(
        'LATITUDE',
        Float,
        nullable=True
    )

    LONGITUDE: Mapped[float] = mapped_column(
        'LONGITUDE',
        Float,
        nullable=True
    )

class PEREGON(Base):
    __tablename__ = 'peregons'

    id: Mapped[int] = mapped_column(
        'id',
        Integer,
        primary_key=True,
        autoincrement=True
    )

    START_CODE: Mapped[int] = mapped_column(
        'START_CODE',
        Integer,
        nullable=True
    )

    END_CODE: Mapped[int] = mapped_column(
        'END_CODE',
        Integer,
        nullable=True

    )

    LEN: Mapped[int] = mapped_column(
        'LEN',
        Integer
    )

class disl_hackaton(Base):
    __tablename__ = 'disl_hackaton'

    id: Mapped[int] = mapped_column(
        'id',
        Integer,
        primary_key=True,
        autoincrement=True
    )

    WAGNUM: Mapped[int] = mapped_column(
        'WAGNUM',
        Integer,
        nullable=True
    )

    OPERDATE: Mapped[int] = mapped_column(
        'OPERDATE',
        Integer,
        nullable=True
    )

    ST_ID_DISL: Mapped[int] = mapped_column(
        'ST_ID_DISL',
        Integer,
        nullable=True
    )

    ST_ID_DEST: Mapped[int] = mapped_column(
        'ST_ID_DEST',
        Integer,
        nullable=True
    )

    TRAIN_INDEX: Mapped[str] = mapped_column(
        'TRAIN_INDEX',
        String,
        nullable=True
    )

class TrainData(Base):
    __tablename__ = 'train_data'

    id: Mapped[int] = mapped_column(
        'id',
        Integer,
        primary_key=True,
        autoincrement=True
    )

    train_index: Mapped[str] = mapped_column(
        'train_index',
        String,
        nullable=False
    )

    station_data: Mapped[list] = mapped_column(
        'station_data',
        JSONB,
        nullable=False
    )

    wagon_amount: Mapped[int] = mapped_column(
        'wagon_amount',
        Integer,
        nullable=False
    )
