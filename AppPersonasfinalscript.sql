USE [master]
GO
/****** Object:  Database [AppPersonas]    Script Date: 22/07/2021 14:58:45 ******/
CREATE DATABASE [AppPersonas]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'AppPersonas', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.MSSQLSERVER\MSSQL\DATA\AppPersonas.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'AppPersonas_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.MSSQLSERVER\MSSQL\DATA\AppPersonas_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT
GO
ALTER DATABASE [AppPersonas] SET COMPATIBILITY_LEVEL = 150
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [AppPersonas].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [AppPersonas] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [AppPersonas] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [AppPersonas] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [AppPersonas] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [AppPersonas] SET ARITHABORT OFF 
GO
ALTER DATABASE [AppPersonas] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [AppPersonas] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [AppPersonas] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [AppPersonas] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [AppPersonas] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [AppPersonas] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [AppPersonas] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [AppPersonas] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [AppPersonas] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [AppPersonas] SET  DISABLE_BROKER 
GO
ALTER DATABASE [AppPersonas] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [AppPersonas] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [AppPersonas] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [AppPersonas] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [AppPersonas] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [AppPersonas] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [AppPersonas] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [AppPersonas] SET RECOVERY FULL 
GO
ALTER DATABASE [AppPersonas] SET  MULTI_USER 
GO
ALTER DATABASE [AppPersonas] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [AppPersonas] SET DB_CHAINING OFF 
GO
ALTER DATABASE [AppPersonas] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [AppPersonas] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [AppPersonas] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [AppPersonas] SET ACCELERATED_DATABASE_RECOVERY = OFF  
GO
EXEC sys.sp_db_vardecimal_storage_format N'AppPersonas', N'ON'
GO
ALTER DATABASE [AppPersonas] SET QUERY_STORE = OFF
GO
USE [AppPersonas]
GO
/****** Object:  Table [dbo].[PersonaJuridica]    Script Date: 22/07/2021 14:58:45 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PersonaJuridica](
	[Nit] [int] NOT NULL,
	[Identificacion] [int] NULL,
	[RazonSocial] [varchar](50) NULL,
	[TipoPersonaId] [int] NULL,
	[Via] [varchar](50) NULL,
	[Nro1] [int] NULL,
	[Letra1] [varchar](50) NULL,
	[Nro2] [int] NULL,
	[Letra2] [varchar](50) NULL,
	[NroAndComplements] [varchar](50) NULL,
	[Municipio] [varchar](50) NULL,
	[Telefono] [varchar](50) NULL,
 CONSTRAINT [PK_PersonaJuridica] PRIMARY KEY CLUSTERED 
(
	[Nit] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[PersonaNatural]    Script Date: 22/07/2021 14:58:45 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PersonaNatural](
	[Identificacion] [int] NOT NULL,
	[Nombre] [varchar](50) NULL,
	[Apellido] [varchar](50) NULL,
	[TipoPersonaId] [int] NULL,
	[Via] [varchar](50) NULL,
	[Nro1] [int] NULL,
	[Letra1] [varchar](50) NULL,
	[Nro2] [int] NULL,
	[Letra2] [varchar](50) NULL,
	[NroAndComplements] [varchar](50) NULL,
	[Municipio] [varchar](50) NULL,
	[Telefono] [varchar](50) NULL,
 CONSTRAINT [PK_PersonaNatural] PRIMARY KEY CLUSTERED 
(
	[Identificacion] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TipoDocumento]    Script Date: 22/07/2021 14:58:45 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TipoDocumento](
	[IdTipoDocumento] [int] IDENTITY(1,1) NOT NULL,
	[NombreDocumento] [varchar](50) NULL,
 CONSTRAINT [PK_TipoDocumento] PRIMARY KEY CLUSTERED 
(
	[IdTipoDocumento] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
INSERT [dbo].[PersonaJuridica] ([Nit], [Identificacion], [RazonSocial], [TipoPersonaId], [Via], [Nro1], [Letra1], [Nro2], [Letra2], [NroAndComplements], [Municipio], [Telefono]) VALUES (811033098, 1214740443, N'Company that can perform the registration', 2, NULL, 5, N'Ba', 1, N'Cq', N'FALSA 123a', N'Antioquia', N'48557')
GO
INSERT [dbo].[PersonaNatural] ([Identificacion], [Nombre], [Apellido], [TipoPersonaId], [Via], [Nro1], [Letra1], [Nro2], [Letra2], [NroAndComplements], [Municipio], [Telefono]) VALUES (900674336, N'Name Company that can perform the registration', N'Apellido Company that can perform the registration', 1, N'avn', 1, N'a', 24, N'b', N'int 34', N'Antioquia', N'3848')
INSERT [dbo].[PersonaNatural] ([Identificacion], [Nombre], [Apellido], [TipoPersonaId], [Via], [Nro1], [Letra1], [Nro2], [Letra2], [NroAndComplements], [Municipio], [Telefono]) VALUES (1214740443, N'jhon', N'giraldo', 1, NULL, 114, N'AA', 6, N'AS', N'INT 943', N'Antioquia', N'9384831111')
GO
SET IDENTITY_INSERT [dbo].[TipoDocumento] ON 

INSERT [dbo].[TipoDocumento] ([IdTipoDocumento], [NombreDocumento]) VALUES (1, N'Natural')
INSERT [dbo].[TipoDocumento] ([IdTipoDocumento], [NombreDocumento]) VALUES (2, N'Juridico')
SET IDENTITY_INSERT [dbo].[TipoDocumento] OFF
GO
ALTER TABLE [dbo].[PersonaJuridica]  WITH CHECK ADD  CONSTRAINT [FK_PersonaJuridica_PersonaNatural] FOREIGN KEY([Identificacion])
REFERENCES [dbo].[PersonaNatural] ([Identificacion])
GO
ALTER TABLE [dbo].[PersonaJuridica] CHECK CONSTRAINT [FK_PersonaJuridica_PersonaNatural]
GO
ALTER TABLE [dbo].[PersonaJuridica]  WITH CHECK ADD  CONSTRAINT [FK_PersonaJuridica_TipoDocumento] FOREIGN KEY([TipoPersonaId])
REFERENCES [dbo].[TipoDocumento] ([IdTipoDocumento])
GO
ALTER TABLE [dbo].[PersonaJuridica] CHECK CONSTRAINT [FK_PersonaJuridica_TipoDocumento]
GO
ALTER TABLE [dbo].[PersonaNatural]  WITH CHECK ADD  CONSTRAINT [FK_PersonaNatural_TipoDocumento] FOREIGN KEY([TipoPersonaId])
REFERENCES [dbo].[TipoDocumento] ([IdTipoDocumento])
GO
ALTER TABLE [dbo].[PersonaNatural] CHECK CONSTRAINT [FK_PersonaNatural_TipoDocumento]
GO
USE [master]
GO
ALTER DATABASE [AppPersonas] SET  READ_WRITE 
GO
